from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView,ListAPIView,UpdateAPIView
from .models import Profile
from feed.models import Post
from .serializers import ProfileSerializer,UserPostSerializer
from rest_framework.permissions import IsAuthenticated



class UserProfileView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.request.user.profile
    
    
class UserPostsView(ListAPIView):
    serializer_class = UserPostSerializer

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)
    
    
class UpdateUserProfileView(UpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.profile