from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostListAPIView



app_name='feed'

urlpatterns = [
    path('posts/', PostListAPIView.as_view(), name='post-list'),
]