from django.db import models

# Create your models here.
def upload(instance,filename):
    return filename

class Category(models.Model):
    product = models.CharField(max_length=200)


class Products(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=200)
    img = models.ImageField(upload_to=upload, default='post/default.jpg')
    description = models.TextField()
    price = models.IntegerField()
