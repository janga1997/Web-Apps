def pset(annualInterestRate,monthlyPaymentRate,balance):
    
    monthly=annualInterestRate/12
    total_paid=0
    
    for i in range(12):
        
        prev_balance=balance
        min_monthly_payment=monthlyPaymentRate*prev_balance
        monthly_unpaid=prev_balance-min_monthly_payment
        balance=(monthly_unpaid)+(monthly_unpaid*monthly)
        total_paid+=min_monthly_payment
        
        print "Month: " +str(i+1)
        print "Minimum monthly payment: " ,round(min_monthly_payment,2)
        print "Remaining balance: ", round(balance,2)
        
    
    print "Total paid: ", round(total_paid,2)
    print "Remaining balance", round(balance,2);
    
    
pset(0.2,0.04,4213)