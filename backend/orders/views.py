from django.shortcuts import render, redirect
from .forms import OrderForm
from django.core.mail import send_mail

# Create your views here.
def index(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            send_mail(
                form.cleaned_data['name'],
                f"Hello, I am {form.cleaned_data['name']} and I am currently at {form.cleaned_data['location']}.\
                    I am looking to get a {form.cleaned_data['weighs']} Kg's {form.cleaned_data['gas_type']} delivered to me for Kshs {form.cleaned_data['amount']}.\
                        Note that it's a {form.cleaned_data['service']}. You can find me on my phone number {form.cleaned_data['phone_no']}.",
                form.cleaned_data['email'],
                ['kiprotichlawi7483@gmail.com'],
            )
            form.save()
            return redirect('success')
        
        else:
            raise ValueError('Hello')

    else:
        form = OrderForm()

    context = {
        'form': form,
    }
    return render(request, 'index.html', context)


def success(request):
    return render(request, 'success.html')