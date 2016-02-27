def pset(balance,annualInterestRate):
    
    
    rate=annualInterestRate/12
    check=True
    
        
    minimum=0
        
    while(check==True):
        
        minimum=minimum+10
        loop_balance=balance
        
        for i in range(12):
            
            if(loop_balance<minimum):
                check=False        
                break
            
            monthly_unpaid=loop_balance-minimum
            loop_balance=monthly_unpaid+(monthly_unpaid*rate)
                
                                             
       
    print "Lowest Payment: ", minimum
    
pset(4773,0.2) 