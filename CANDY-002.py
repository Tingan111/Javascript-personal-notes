# // 編號：CANDY-002
# // 程式語言：PYTHON
# // 題目：請寫一小段程式，印出連續陣列裡缺少的字元

chars1 = ["a", "b", "c", "d", "f", "g"];
chars2 = ["O", "Q", "R", "S"];
def missingChar(chars):
    missing=[]
    for i in range(len(chars)-1):
        print(i)
        for code in range(ord(chars[i])+1,ord(chars[i+1])):
            print(code)
            missing.append(chr(code))
    return missing if missing else("No missing charecter")

print(missingChar(chars1)); #// 印出 e
print(missingChar(chars2)); #// 印出 P

# // 提示：
# // 可使用字串的 charCodeAt 方法...
# 輸入陣列 chars：包含按順序排列的字母。
# 檢查相鄰字母的差值：
# ord(chars[i+1]) 是陣列中第 i+1 個字母的 Unicode 編碼。
# ord(chars[i]) 是陣列中第 i 個字母的 Unicode 編碼。
# 差值若大於 1，說明兩個字母之間有缺失的字母。
# 回傳缺失的字元：
# chr(ord(chars[i])+1) 將缺失字母的 Unicode 編碼轉換回字母。
def missingChar(chars):
    missing = []
    for i in range(len(chars) - 1):
        for code in range(ord(chars[i]) + 1, ord(chars[i + 1])):
            missing.append(chr(code))
    return missing if missing else ["No missing character"]

