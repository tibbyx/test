from django.db import models


# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length=255)
    price = models.IntegerField()

    def __str__(self):
        return self.title
