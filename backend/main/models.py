from django.db import models
from django.contrib.auth.models = User

# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    # image =
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=50, null=True)
    # image =
    description = models.TextField(max_length=5000, null=True)
    likes = models.IntegerField(null=True, default=0)
    _id = models.AutoField(primary_key=True, editable=False)

# class Reviews(models.Model):
#     pass

# class Checkout(models.Model):
#     pass

# class Payment(models.Model):
#     pass

# class Shipping(models.Model):
#     pass
