input = int(input())
coin_list = [500, 100, 50, 10, 5, 1]
change = 1000 - input
count = 0

for coin in coin_list:
  count += change // coin
  change = change % coin

print(count)