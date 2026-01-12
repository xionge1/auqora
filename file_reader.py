# write code using os module to read file names in a folder or directory
import os

# get current working directory

# cwd = os.getcwd() #retrieves cwd
# print(cwd)


# dir_list = os.listdir()
# print(dir_list)

#now print the files in the img subdirectory

path = "/Users/potato/code/Web Development/auqora/img/main-artworks"
img_list = os.listdir(path)
# print(img_list)

updated_list = [file for file in img_list if file != ".DS_Store"]
updated_list.sort()
print(updated_list)

with open("image_names.txt","w") as file:
    for item in updated_list:
        file.write(item)
        file.write(', ')

    
