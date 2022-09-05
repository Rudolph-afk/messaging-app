from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100, default="", unique=True)
    password = models.CharField(max_length=10, default="", unique=False)
    credits = models.IntegerField(null=False, default=0)
    created_on = models.DateTimeField(auto_now_add=True)
    # user_data = models
    # groups = {'date':models.DateTimeField(),
    #           'group':models.CharField(),'members':}
    # archives = {'year':models.DateField(),'month':, 'messages':, 'contacts':, 'groups', total_messages}
    # billing = {'bill':, 'billing_date':, ''}
    
    def update_bill():
        pass
    
    def clear_bill():
        pass
    
    def send_message():
        pass
    
    
