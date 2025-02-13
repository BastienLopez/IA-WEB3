import time
import random

def random_delay(min_sec=1, max_sec=5):
    """Ajoute un délai aléatoire pour éviter d'être détecté comme bot."""
    time.sleep(random.uniform(min_sec, max_sec))
