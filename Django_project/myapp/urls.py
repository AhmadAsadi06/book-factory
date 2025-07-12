from django.urls import path
from .views import RegisterAPIView, LoginAPIView, product_list
from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import LoginAPIView
urlpatterns = [
    path('api/register/', RegisterAPIView.as_view(), name='register'),
    path('products/', product_list, name='product-list'),
    path('api/login/', LoginAPIView.as_view(),name='api')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
