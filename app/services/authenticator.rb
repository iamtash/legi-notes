class Authenticator
    def initialize(google_client_id)
        @google_client_id = google_client_id
    end

    def valid_credentials?(token)
        validator = GoogleIDToken::Validator.new
        begin
          @payload = validator.check(token, @google_client_id)
        rescue GoogleIDToken::ValidationError => e
          false
        end
    end

    def get_payload
        @payload
    end
end