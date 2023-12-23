from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView,ListAPIView,UpdateAPIView
from .models import Profile
from feed.models import Post
from .serializers import ProfileSerializer,UserPostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import FileUploadParser



@api_view(['GET', 'PUT'])
@permission_classes([AllowAny])
def get_user_profile(request, id):
    try:
        profile = Profile.objects.get(id=id)
        if request.method == 'GET':
            serializer = ProfileSerializer(profile)
            return Response(serializer.data)
        elif request.method == 'PUT':
            # Initialize the FileUploadParser
            parser_classes = (FileUploadParser,)

            # Parse the file data from the request
            file_data = request.data.get('image')  # Change 'image' to the appropriate field name

            # Create a copy of the request data without the file
            request_data = request.data.copy()
            request_data.pop('image')  # Change 'image' to the appropriate field name

            serializer = ProfileSerializer(profile, data=request_data)
            if serializer.is_valid():
                # Update profile data without the file
                serializer.save()

                # Handle the file upload separately
                if file_data:
                    profile.image = file_data
                    profile.save()

                return Response(serializer.data)
            else:
                return Response({'error': 'Falha na validação', 'details': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    except Profile.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    
class UserPostsView(ListAPIView):
    serializer_class = UserPostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Post.objects.filter(author__id=user_id)
    