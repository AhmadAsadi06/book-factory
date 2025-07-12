from django.db import models
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class cala(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='products/', default='default.jpg')  # افزودن مقدار پیش‌فرض
    shortcut = models.URLField()


class SimpleUser(models.Model):
    first_name= models.CharField(max_length=100)
    last_name = models.CharField(max_length = 100)
    username = models.CharField(max_length=100, unique=True)
    email= models.CharField(max_length = 100)
    password = models.CharField(max_length=128)
    mobile = models.CharField(max_length=15, blank=True, null=True)



    def __str__(self):
        return self.username