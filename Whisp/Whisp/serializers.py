from rest_framework import serializers

class ChangePasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    new_password = serializers.CharField(write_only=True, required=True)
    new_password_confirm = serializers.CharField(write_only=True, required=True)

    def validate(self, data):
        """
        Verifique se as duas novas senhas correspondem.
        """
        if data['new_password'] != data['new_password_confirm']:
            raise serializers.ValidationError("As novas senhas não coincidem")
        return data
