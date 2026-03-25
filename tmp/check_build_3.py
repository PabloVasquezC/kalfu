import os

file_path = r"c:\Users\Cristian Metplastech\Desktop\kalfu\build_output_3.txt"
if os.path.exists(file_path):
    with open(file_path, "rb") as f:
        content = f.read()
    
    # Try different encodings
    for encoding in ["utf-16-le", "utf-8", "latin-1"]:
        try:
            text = content.decode(encoding)
            print(f"Decoding with {encoding} successful")
            # Print unique errors
            import re
            errors = re.findall(r"Error: .*", text)
            for err in set(errors):
                print(err)
            
            # Print module-not-found details
            if "module-not-found" in text:
                print("\nModule Not Found Details:")
                # Find the lines around module-not-found
                lines = text.splitlines()
                for i, line in enumerate(lines):
                    if "module-not-found" in line:
                        print("\n".join(lines[max(0, i-5):i+10]))
            break
        except:
            continue
else:
    print("File not found")
