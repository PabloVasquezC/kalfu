import re

source_path = r"c:\Users\Cristian Metplastech\Desktop\kalfu\node_modules\.pnpm\@n8n+chat@1.7.0_typescript@5.9.3\node_modules\@n8n\chat\dist\style.css"
target_path = r"c:\Users\Cristian Metplastech\Desktop\kalfu\src\styles\n8n-chat.css"

with open(source_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace :global(.class) with .class
fixed_content = re.sub(r":global\(([^)]+)\)", r"\1", content)

with open(target_path, "w", encoding="utf-8") as f:
    f.write(fixed_content)

print(f"Fixed CSS written to {target_path}")
