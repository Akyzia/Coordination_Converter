import utm

# Função para converter coordenadas de latitude e longitude para UTM
def convert_coordinates(latitude, longitude):
    utm_coords = utm.from_latlon(latitude, longitude)
    return utm_coords[0], utm_coords[1]