from django import forms 
from .models import Orders

# Create your forms 
class OrderForm(forms.ModelForm):
    class Meta:
        model = Orders
        fields = '__all__'