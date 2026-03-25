import os

file_path = r"c:\Users\Cristian Metplastech\Desktop\kalfu\final_err.txt"
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
            
            # Print failures
            if "Failed to compile" in text:
                print("\nFailed to Compile Details:")
                # Find the lines around Failed to compile
                lines = text.splitlines()
                for i, line in enumerate(lines):
                    if "Failed to compile" in line:
                        print("\n".join(lines[max(0, i-5):i+20]))
                
            break
        except:
            continue
else:
    print("File not found")
