import random
import string

def generateDescription():
    out = ""
    for _ in range(random.randint(8, 100)):
        for _ in range(random.randint(1, 12)):
            out += random.choice(string.ascii_lowercase.join(string.digits))
        out += " "
    return out

def generateCategory():
    return random.choice([
        "electronics",
        "books",
        "clothing",
        "sports",
        "foodstuf",
        "stationary",
        "pet supplies",
        "other"
    ])

productFile = open("./mock_products.txt", "r")
productNames = productFile.readlines()
for i in range(len(productNames)):
    productNames[i] = productNames[i].strip("\n")
productFile.close()

dbFile = open("./mock_db.json", "w")
dbFile.write("{\n")
dbFile.write("\t\"products\": [\n")

id = 0
for productName in productNames:
    id = id + 1
    name = productName
    price = random.randint(10, 10000);
    description = generateDescription()
    category = generateCategory()

    dbFile.write("\t\t{\n")
    dbFile.write(f"\t\t\t\"id\": \"{id}\",\n")
    dbFile.write(f"\t\t\t\"name\": \"{name}\",\n")
    dbFile.write(f"\t\t\t\"price\": {price},\n")
    dbFile.write(f"\t\t\t\"description\": \"{description}\",\n")
    dbFile.write(f"\t\t\t\"category\": \"{category}\"\n")
    dbFile.write("\t\t}")
    if(productName != productNames[-1]):
        dbFile.write(",")
    dbFile.write("\n")


dbFile.write("\t]\n")
dbFile.write("}\n")
dbFile.close()
