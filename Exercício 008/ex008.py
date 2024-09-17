"""
                                    ______ Exercício 008 ______
    Escreva um programa que leia um valor em metros e o exiba em quilômetros, hectômetros, decâmentros, decímetros, centímentos e milímetros.   

"""
medida = float(input("Informe a medida em metros: "))

# Calcula as conversões
km = medida / 1000
hm = medida / 100
dm = medida / 10
dam = medida * 10
cm = medida * 100
mm = medida * 1000

# Exibe a resposta
print(f"A medida {medida:.1f} metros corresponde a:")
print(f"{km:.3f}km")
print(f"{hm:.2f}hm")
print(f"{dm:.1f}dm")
print(f"{dam:.0f}dam")
print(f"{cm:.0f}cm")
print(f"{mm:.0f}mm")
