import os
import re

directory = '.'

for root, dirs, files in os.walk(directory):
    if 'node_modules' in root or '.git' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            modified = False

            # Replace leading slash in href and src
            if re.search(r'href="/', content) or re.search(r'src="/', content):
                content = re.sub(r'href="/', 'href="', content)
                content = re.sub(r'src="/', 'src="', content)
                modified = True

            # Add viewport meta tag if missing
            if '<meta name="viewport"' not in content:
                if '<head>' in content:
                    viewport_tag = '\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">'
                    # Try to put it after charset
                    if '<meta charset="UTF-8">' in content:
                        content = content.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">' + viewport_tag)
                    else:
                        content = content.replace('<head>', '<head>' + viewport_tag)
                    modified = True
            
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Fixed {filepath}")

print("Done fixing HTML files.")
