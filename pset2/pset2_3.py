balance=320000
annualInterestRate=0.2

rate=annualInterestRate/12.0
check=True
lower=balance/12.0
upper=(balance*((1+rate)**12))/12.0



while(round(upper-lower,3)>=0.001):
    
    loop_balance=balance
    minimum=(lower+upper)/2.0
    
    for i in range(12):
        
        if(loop_balance<minimum):
            
            check=False
            break
            
            
        monthly_unpaid=loop_balance-minimum
        loop_balance=monthly_unpaid*(1+rate)
        
        
    if check==True:
        
        lower=minimum
        
    else:
        check=True
        
        upper=minimum
        
print "Lowest payment : ", round(minimum,2)