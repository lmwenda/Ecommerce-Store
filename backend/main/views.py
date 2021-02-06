from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        "http://127.0.0.1:8000/api/products",
        "http://127.0.0.1:8000/api/product/<int:id>",
        "http://127.0.0.1:8000/api/posts",
        "http://127.0.0.1:8000/api/post/<int:id>",
        "http://127.0.0.1:8000/api/payments"
    ]
    welcome = [
        'Welcome to Developer Store API',
        'You may Send Requests to the following Routes: ',
        routes
    ]

    return Response(welcome)

@api_view(['GET'])
def getProducts(request):
    return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
    product = None

    for i in products:
        if i['_id'] == pk:
            product = i
            break

    return Response(product)
