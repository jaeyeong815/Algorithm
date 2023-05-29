input = int(input())
count = 0

while input >= 3:
  if (input % 5 == 0):
    count += input // 5
    input %= 5
  else:
    count += 1
    input -= 3


if(input != 0):
  count = -1

print(count)
