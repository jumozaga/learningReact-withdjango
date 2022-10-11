from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def home(request):
   # return render(request, 'app/home.html')
   return JsonResponse({'message': 'Hello, world!'})