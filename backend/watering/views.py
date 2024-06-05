from rest_framework.viewsets import ModelViewSet
from .models import Books
from .serializers import BookSerializer


# Create your views here.
class BookViewSet(ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerializer
