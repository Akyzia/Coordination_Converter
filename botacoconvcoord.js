
        // Função para converter coordenadas e exibir o resultado
        function convertCoordinates() {
            var latitude = parseFloat(document.getElementById('latitude').value);
            var longitude = parseFloat(document.getElementById('longitude').value);
            
            // Chamada à função de conversão de coordenadas
            var utmCoords = convertCoordinatesToUTM(latitude, longitude);
            
            // Exibir o resultado na página
            var resultDiv = document.getElementById('conversionResult');
            resultDiv.innerHTML = `UTM Easting: ${utmCoords.easting}, UTM Northing: ${utmCoords.northing}`;
        }

        // Função fictícia para simular a conversão de coordenadas UTM
        function convertCoordinatesToUTM(latitude, longitude) {
            // Substitua isso com uma implementação real usando uma biblioteca JavaScript para UTM
            var utmEasting = longitude * 1000;  // Exemplo fictício de leste UTM
            var utmNorthing = latitude * 1000;  // Exemplo fictício de norte UTM
            return { easting: utmEasting, northing: utmNorthing };
        }