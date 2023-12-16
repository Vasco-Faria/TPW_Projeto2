from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView,ListAPIView,UpdateAPIView
from .models import Profile
from feed.models import Post
from .serializers import ProfileSerializer,UserPostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated



class UserProfileView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_object(self):
        user_id = self.kwargs.get('user_id')
        return self.queryset.get(user__id=user_id)
    
    
class UserPostsView(ListAPIView):
    serializer_class = UserPostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Post.objects.filter(author__id=user_id)
    
    
class UpdateUserProfileView(UpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.profile