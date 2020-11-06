<p style="line-height:1.5";>
	<span style="font-size:2em; line-height:0">
		Sistemas mecánicos
	</span>
	<br>
	<b>
		<span style="font-size:2em">
			Tarea 1: Tren de aterrizaje
		</span>
		<br><span style="font-size:1.2em">
			Germán Quijada
		</span>
	</b>
</p>
<br>

####Análisis de mecanismo
Se solicita analizar el mecanismo del tren de aterrizaje de un avión con los siguientes datos.
<br>Velocidad apertura cilindro hidráulico: $2[(cm)/s]$
<br>Masa barra 6: $m_6 = 55[kg]$
<br>Momento de inercia: $I_6 = 1.3[(kg)/m^2]$
<br>$V_A = V_D = V_G = 0[m/s]$

<center>![](mecanismo.svg)</center>

####Escala Inkscape
<center>
Distancia real $ED = 40[cm] = 17.89[mm_text(Inkscape)] => 2.23589[(cm)/(mm_text(Inkscape))]$

Velocidad real $V_(B_(3//2)) = 2.0[(cm)/s] = 25.23[mm_text(Inkscape)] => 0.07927[((cm)/s)/(mm_text(Inkscape))]$
</center>

####Determinar velocidad angular en la barra 6
<center>
Comenzando desde arriba, se puede encontrar el centro de rotación $O_13$

$O_14 &nbsp; O_34 &nbsp; O_13$
<br>$O_12 &nbsp; O_23 &nbsp; O_13$
<div>
<img src="1.svg" style="width:17em">
<img src="2.svg" style="width:17em">
</div>
De esta forma con un triangulo de velocidades se puede encontrar la velocidad $V_B$

$V_B = V_(B_(3//2)) + omega_2 xx r_(B//O_12)$
<br>$V_B = omega_3 xx r_(B//O_13)$
<div>
<img src="3.svg" style="width:17em">
</div>
$V_B = 25.92 * 0.07927 = 2.05[(cm)/s]$

Luego, la velocidad angular $omega_3$

$V_B = omega_3 xx r_(B//O_13)$

$2.05[(cm)/s] = omega_3 * 39.14 * 2.23589$

$omega_3 = 0.02343[(rad)/s] ⟳$

Los cuerpos 3 y 4 están unidos en $C$

$omega_3 * bar(O_13C) = omega_4 * bar(O_14C)$

$0.02343[(rad)/s] * 43.47 * 2.23589 = omega_4 * 9.07 * 2.23589$

$omega_4 = 0.11229[(rad)/s] ⟲$

Se prosigue analizando los centros instantáneos

$O_16 &nbsp; O_56 &nbsp; O_15$
<br>$O_14 &nbsp; O_45 &nbsp; O_15$
<div>
<img src="5.svg" style="width:13em">
</div>

Los cuerpos 4 y 5 comparten el punto $E$

$omega_4 * bar(O_14O_45) = omega_5 * bar(O_15O_45)$

$0.11229[(rad)/s] * 18.26 * 2.23589 = omega_5 * 3.48 * 2.23589$

$omega_5 = 0.58920 [(rad)/s] ⟳$

Los cuerpos 5 y 6 comparten el punto $F$

$omega_5 * bar(O_15O_56) = omega_6 * bar(O_16O_56)$

$0.58920[(rad)/s] * 8.03 * 2.23589 = omega_4 * 13.29 * 2.23589$

$omega_6 = 0.35600[(rad)/s] ⟳$
</center>
<br>

####Determinar aceleración angular en la barra 6
<center>
$A_B = ubrace(omega_2 xx (omega_2 xx bar(AB)))_text(normal) + ubrace(alpha_2 xx bar(AB))_text(tangencial) + ubrace(2 * omega_2 xx V_B _3//2)_text(coriolis)$

$A_C = A_B + ubrace(omega_3 xx (omega_3 xx bar(BC)))_text(normal) + ubrace(alpha_3 xx bar(BC))_text(tangencial)$

$A_C = ubrace(omega_4 xx (omega_4 xx bar(DC)))_text(normal) + ubrace(alpha_4 xx bar(DC))_text(tangencial)$

Ya que $omega_2 = omega_3$ y $alpha_2 = alpha_3$ entonces

$A_C = ubrace(omega_3 xx (omega_3 xx bar(AC)))_text(0.025284 cm/s^2) + ubrace(alpha_3 xx bar(AC))_text(tangencial) + ubrace(2 * omega_2 xx V_B _3//2)_text(0.09372 cm/s^2)$

$A_C = ubrace(omega_4 xx (omega_4 xx bar(DC)))_text(0.25401 cm/s^2) + ubrace(alpha_4 xx bar(DC))_text(tangencial)$

<div>
<img src="6.svg" style="width:18em">
</div>
$A_C = 0.30233[(cm)/s^2]$

$alpha_4 = 0.00808492[(rad)/s^2] ⟳$

$A_E = ubrace(omega_4 xx (omega_4 xx bar(DE)))_text(0.51479 cm/s^2) + ubrace(alpha_4 xx bar(DE))_text(0.33008 cm/s^2)$

$A_F = A_E + ubrace(omega_5 xx (omega_5 xx bar(EF)))_text(4.84351 cm/s^2) + ubrace(alpha_5 xx bar(EF))_text(tangencial)$

$A_F = ubrace(omega_6 xx (omega_6 xx bar(GF)))_text(3.76595 cm/s^2) + ubrace(alpha_6 xx bar(GF))_text(tangencial)$

<div>
<img src="8.svg" style="width:18em">
</div>
$A_F = 4.41282[(cm)/s^2]$

$alpha_6 = 0.0774064[(rad)/s^2] ⟳$
</center>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

####Determinar fuerza sobre pistón

<center>
Primero se necesita la aceleración en el centro de masa
$A_(cm) = ubrace(omega_6 xx (omega_6 xx bar(Gcm)))_text(9.42197 cm/s^2) + ubrace(alpha_6 xx bar(Gcm))_text(5.75465 cm/s^2)$

<div>
<img src="9.svg" style="width:16em">
</div>

$A_(cm) = 11.04036[(cm)/s^2]$

<div>
<img src="10.svg" style="width:16em">
</div>

Se simplifica el torque y el peso sobre el centro de masa en una sola fuerza de un sistema equivalente

$I * alpha = 1.3[N/m^2] * 0.0774064[(rad)/s^2] = 0.10062 [N * m]$

$m * A_(cm) = 55[kg] * 0.1104036[m/s^2] = 6.072198[N]$

$d = (I * alpha) / (m * A_(cm)) = 0.01657[m] = 1.657[cm]$

Se conoce la dirección de la fuerza $F_56$ ya que es una barra conectada en dos puntos, y la $F_16$ para completar el triangulo

<div>
<img src="11.svg" style="width:16em">
<img src="12.svg" style="width:16em">
</div>

$F_56 = 27.06[N]$

La fuerza $F_56$ se transmite por la barra 5 hasta el cuerpo 4 como $F_45$

<div>
<img src="13.svg" style="width:16em">
<img src="14.svg" style="width:16em">
</div>

$F_34 = 58.39[N]$

<div>

</div>

</center>
