from rest_framework.serializers import ModelSerializer
from .models import Books


class BookSerializer(ModelSerializer):
    class Meta:
        model = Books
        fields = ("title", "price")
