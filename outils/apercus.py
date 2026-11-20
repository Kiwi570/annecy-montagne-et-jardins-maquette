# Aperçus flous (20 px, base64) des images d'ouverture : la figure les affiche en fond tant que l'image
# n'est pas décodée (retour arrière, connexion lente). Écrit donnees/apercus.json, lu par outils/generer.mjs.
import base64, io, json, os
from PIL import Image, ImageFilter
noms = ['accueil-ouverture', 'eco-ouverture', 'creation-piscine', 'creation-croquis', 'grok/entretien-ouverture', 'real-escalier-traverses', 'metier-eco']
sortie = {}
for nom in noms:
    for cle, f in ((nom, f'assets/images/{nom}-640.webp'), (nom + '-mobile', f'assets/images/{nom}-mobile-640.webp')):
        if not os.path.exists(f): continue
        im = Image.open(f).convert('RGB'); w, h = im.size
        im = im.resize((20, max(1, round(20 * h / w))), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.5))
        b = io.BytesIO(); im.save(b, 'WEBP', quality=50)
        sortie[cle] = 'data:image/webp;base64,' + base64.b64encode(b.getvalue()).decode()
json.dump(sortie, open('donnees/apercus.json', 'w'), indent=1)
print(len(sortie), 'aperçus')
