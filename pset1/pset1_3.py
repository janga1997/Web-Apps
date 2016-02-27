def item_order(order):
    array=order.split()
    
    burger_count=0
    water_count=0
    salad_count=0
    
    for i in array:
        if(i=='salad'):
            salad_count=salad_count+1
            
        elif(i=='hamburger'):
            burger_count=burger_count+1
            
        else:
            water_count=water_count+1
    
    
    return "salad:" + str(salad_count) + " hamburger:" + str(burger_count)+ " water:" +str(water_count)
        
    
    

    