import json

def load_devices(filename):
    """Načte JSON, odfiltruje prázdné stavy a vrátí seznam."""
    try:
        with open(filename, 'r', encoding='utf-8') as file:
            data = json.load(file)
            
        valid_devices = [device for device in data if device.get("state")]
        return valid_devices
        
    except FileNotFoundError:
        print(f"Chyba: Soubor '{filename}' nebyl nalezen.")
        return []

def sort_devices(device_list):
    """Seřadí zařízení abecedně podle klíče 'name'."""
    return sorted(device_list, key=lambda d: d.get("name", "").lower())

def group_devices(device_list, limit):
    """Rozdělí seznam na menší části (balíky) o velikosti 'limit'."""
    grouped = []
    for i in range(0, len(device_list), limit):
        grouped.append(device_list[i:i + limit])
    return grouped

if __name__ == "__main__":
    ukazka_json = [
        {"id": 1, "name": "Monitor", "state": "ok"},
        {"id": 2, "name": "Klávesnice", "state": ""},
        {"id": 3, "name": "Myš", "state": "ok"},
        {"id": 4, "name": "Dokovací stanice", "state": "ok"}
    ]
    
    platna_zarizeni = [d for d in ukazka_json if d.get("state")]
    
    serazena = sort_devices(platna_zarizeni)
    print("Seřazeno:", serazena)
    
    baliky = group_devices(serazena, 2)
    print("Balíky:", baliky)