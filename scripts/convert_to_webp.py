import os
import re
from PIL import Image

PUBLIC_DIR = 'public'
SRC_DIR = 'src'

# Skip special PWA icons if necessary
SKIP_CONVERSION = {'favicon.ico', 'logo192.png', 'logo512.png'}

def convert_images():
    converted_map = {}
    original_total_size = 0
    new_total_size = 0

    for root, dirs, files in os.walk(PUBLIC_DIR):
        for file in files:
            if file in SKIP_CONVERSION or file.startswith('.'):
                continue
            ext = os.path.splitext(file)[1].lower()
            if ext in ['.png', '.jpg', '.jpeg']:
                file_path = os.path.join(root, file)
                orig_size = os.path.getsize(file_path)
                original_total_size += orig_size

                base_name = os.path.splitext(file)[0]
                webp_name = base_name + '.webp'
                webp_path = os.path.join(root, webp_name)

                try:
                    with Image.open(file_path) as img:
                        # Convert RGBA/P to RGB if saving without alpha or keep RGBA for WebP
                        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                            # Webp supports alpha transparency
                            pass
                        elif img.mode != 'RGB':
                            img = img.convert('RGB')
                        
                        # Downscale if excessively massive (> 2400px width/height)
                        max_dim = 2400
                        if img.width > max_dim or img.height > max_dim:
                            img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                        
                        img.save(webp_path, 'WEBP', quality=82, method=6)
                    
                    new_size = os.path.getsize(webp_path)
                    new_total_size += new_size
                    
                    # Store mapping for updating source code
                    # e.g., "hero.png" -> "hero.webp"
                    rel_orig = os.path.relpath(file_path, PUBLIC_DIR).replace('\\', '/')
                    rel_webp = os.path.relpath(webp_path, PUBLIC_DIR).replace('\\', '/')
                    converted_map[rel_orig] = rel_webp

                    print(f"Converted: {rel_orig} ({orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB, -{(1 - new_size/orig_size)*100:.1f}%)")
                    
                    # Remove original image to keep repo clean
                    os.remove(file_path)
                except Exception as e:
                    print(f"Error converting {file_path}: {e}")

    print("\n--- Summary ---")
    print(f"Original size: {original_total_size / (1024*1024):.2f} MB")
    print(f"New WebP size: {new_total_size / (1024*1024):.2f} MB")
    saved = original_total_size - new_total_size
    percent = (saved / original_total_size * 100) if original_total_size > 0 else 0
    print(f"Total saved: {saved / (1024*1024):.2f} MB ({percent:.1f}% reduction)\n")

    return converted_map

def update_code_references(converted_map):
    print("Updating code references in src/ and public/...")
    target_dirs = [SRC_DIR, PUBLIC_DIR]
    extensions = ('.js', '.jsx', '.ts', '.tsx', '.json', '.html', '.css')
    
    updated_files = 0

    for target_dir in target_dirs:
        for root, dirs, files in os.walk(target_dir):
            for file in files:
                if file.endswith(extensions):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as fh:
                            content = fh.read()
                        
                        modified = False
                        new_content = content
                        
                        for orig_rel, webp_rel in converted_map.items():
                            # match direct file names or relative paths
                            orig_filename = os.path.basename(orig_rel)
                            webp_filename = os.path.basename(webp_rel)
                            
                            # Replace full path references like "/images/interrior/foo.jpg"
                            if "/" + orig_rel in new_content:
                                new_content = new_content.replace("/" + orig_rel, "/" + webp_rel)
                                modified = True
                            if orig_rel in new_content:
                                new_content = new_content.replace(orig_rel, webp_rel)
                                modified = True
                            if orig_filename in new_content:
                                new_content = new_content.replace(orig_filename, webp_filename)
                                modified = True

                        if modified:
                            with open(file_path, 'w', encoding='utf-8') as fh:
                                fh.write(new_content)
                            print(f"Updated references in: {file_path}")
                            updated_files += 1

                    except Exception as e:
                        print(f"Error updating {file_path}: {e}")

    print(f"Total code files updated: {updated_files}")

if __name__ == '__main__':
    converted_map = convert_images()
    update_code_references(converted_map)
