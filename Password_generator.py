import random
import string

def generate_password(length=12, use_digits=True, use_special_chars=True):
    characters = string.ascii_letters
    if use_digits:
        characters += string.digits
    if use_special_chars:
        characters += string.punctuation

    password = ''.join(random.choice(characters) for _ in range(length))
    return password

# Example: Generate a password with length 16, including digits and special characters
password = generate_password(length=16, use_digits=True, use_special_chars=True)
print(password)
