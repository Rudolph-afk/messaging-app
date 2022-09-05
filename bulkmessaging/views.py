from django.shortcuts import render


def index(request, *args, **kwargs0):
    return render(request, 'bulkmessaging/index.html')
