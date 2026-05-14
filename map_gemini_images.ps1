param(
    [string]$ImageFolder = ".\assets\images"
)

# Trova tutte le immagini che contengono "gemini" nel nome
$images = Get-ChildItem -Path $ImageFolder -File -Filter "*gemini*.*" | Sort-Object Name

if ($images.Count -eq 0) {
    Write-Host "Nessuna immagine con 'gemini' trovata in $ImageFolder." -ForegroundColor Yellow
    exit
}

Write-Host "--- MAPPATURA IMMAGINI ---" -ForegroundColor Cyan
Write-Host "Sto rinominando le immagini trovate per farle combaciare con i prodotti 1-$($images.Count):"

$counter = 1
foreach ($img in $images) {
    # Evita di rinominare se ha già il formato esatto gemini_1.jpg
    $targetName = "gemini_$counter" + $img.Extension
    
    if ($img.Name -ne $targetName) {
        $destPath = Join-Path -Path $ImageFolder -ChildPath $targetName
        
        # Rinomina il file
        Rename-Item -Path $img.FullName -NewName $targetName -Force
        Write-Host "Prodotto $counter : $($img.Name) -> $targetName" -ForegroundColor Green
    } else {
        Write-Host "Prodotto $counter : $targetName (Gia corretto)" -ForegroundColor DarkGray
    }
    
    $counter++
}

Write-Host "--------------------------" -ForegroundColor Cyan
Write-Host "Fatto! Ora apri js/database.js e verifica se l'abbinamento (ID 1 = gemini_1.jpg) corrisponde al prodotto corretto." -ForegroundColor White
