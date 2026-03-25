import os

file_path = r"c:\Users\Cristian Metplastech\Desktop\kalfu\build_output.txt"
if os.path.exists(file_path):
    with open(file_path, "rb") as f:
        content = f.read()
    
    # Try different encodings
    for encoding in ["utf-16-le", "utf-8", "latin-1"]:
        try:
            text = content.decode(encoding)
            if "Parsing CSS source code failed" in text:
                print("CSS Error FOUND")
            else:
                print("CSS Error NOT found")
            
            if "module-not-found" in text:
                print("Module-not-found FOUND")
            
            # Print last 20 lines
            lines = text.splitlines()
            print("\n".join(lines[-20:]))
            break
        except:
            continue
else:
    print("File not found")
