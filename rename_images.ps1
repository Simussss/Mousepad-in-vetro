param(
    [string]$SourceFolder = "C:\Percorso\Alla\Tua\Cartella\Sorgente",
    [string]$DestFolder = ".\assets\images"
)

# Verifica che la cartella sorgente esista
if (-Not (Test-Path $SourceFolder)) {
    Write-Host "Errore: Cartella sorgente non trovata ($SourceFolder). Modifica il percorso nello script." -ForegroundColor Red
    exit
}

# Crea la cartella di destinazione se non esiste
if (-Not (Test-Path $DestFolder)) {
    New-Item -ItemType Directory -Path $DestFolder | Out-Null
    Write-Host "Creata cartella di destinazione: $DestFolder" -ForegroundColor Green
}

# Ottieni le ultime 20 immagini (jpg, png, webp, jpeg) modificate più di recente
$images = Get-ChildItem -Path $SourceFolder -File -Include *.jpg, *.jpeg, *.png, *.webp -Recurse | 
          Sort-Object LastWriteTime -Descending | 
          Select-Object -First 20

if ($images.Count -eq 0) {
    Write-Host "Nessuna immagine trovata nella cartella sorgente." -ForegroundColor Yellow
    exit
}

# Rinomina e sposta
$counter = 1
foreach ($img in $images) {
    # Forza estensione .jpg o mantieni quella originale? La richiesta dice "item-1.jpg"
    # Se il file non è jpg, lo rinominiamo lo stesso .jpg (attenzione: non converte il formato reale, cambia solo l'estensione)
    # Se si vuole mantenere l'estensione reale: $ext = $img.Extension; $newName = "item-$counter$ext"
    # Seguiamo la richiesta alla lettera: "item-1.jpg"
    $newName = "item-$counter.jpg"
    $destPath = Join-Path -Path $DestFolder -ChildPath $newName
    
    Copy-Item -Path $img.FullName -Destination $destPath -Force
    Write-Host "Copiato e rinominato: $($img.Name) -> $newName" -ForegroundColor Cyan
    $counter++
}

Write-Host "Operazione completata con successo! Le 20 immagini sono in $DestFolder" -ForegroundColor Green
