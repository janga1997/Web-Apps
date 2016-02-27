
count=0

s=s+'  '
for i in range(len(s)):
    if(s[i]=='b' and s[i+1]=='o' and s[i+2]=='b'):
        count=count+1
        
print count