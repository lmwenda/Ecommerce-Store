from django.contrib import admin
from .models import Product, Post, Reviews, Order, OrderItem, ShippingAddress

# Register your models here.

admin.site.register(Product)
admin.site.register(Post)
admin.site.register(Reviews)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)