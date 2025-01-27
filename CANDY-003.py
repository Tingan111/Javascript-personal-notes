# 編號：CANDY-003
# 程式語言:Python
#  題目：完成函數的內容，把陣列裡的 0 都移到最後面

list = [False, 1, 0, -1, 2, 0, 1, 3, "a"];

def move_zeros_toend(arr):
    non_zero=[x for x in arr if not (x==0 and x is not False)]
    zero_count=sum(1 for x in arr if x==0 and x is not False)
    return non_zero +[0]*zero_count

result = move_zeros_toend(list);
print(result); # 印出 [False, 1, -1, 2, 1, 3, "a", 0, 0] 