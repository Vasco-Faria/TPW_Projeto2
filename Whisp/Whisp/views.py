from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes([AllowAny])
def change_password(request):
    email = request.data.get('email')
    new_password = request.data.get('new_password')
    new_password_confirm = request.data.get('new_password_confirm')

    if new_password != new_password_confirm:
        return Response({"error": "As senhas não coincidem"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)
        user.set_password(new_password)
        user.save()
        return Response({"success": "Senha alterada com sucesso"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"error": "Usuário não encontrado"}, status=status.HTTP_404_NOT_FOUND)
