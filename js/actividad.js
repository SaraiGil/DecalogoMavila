function findPos(obj)
{
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

function resultadoDiagnostico()
{
	resultado = -10;
	showResult = true;

	orden = true;
	limpieza = true;
	puntualidad = true;
	responsabilidad = true;
	superacion = true;
	honradez = true;
	respeto = true;
	ley = true;
	trabajo = true;
	ahorro = true;

	consejo = "";

	if (document.getElementById('p1a1').checked)
	{
		resultado = resultado + 1;
		orden = false;
	}
	else
	{
		if (document.getElementById('p1a2').checked)
		{
			resultado = resultado + 2;
			orden = false;
		}
		else
		{
			if (document.getElementById('p1a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p1a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p1a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p2a1').checked)
	{
		resultado = resultado + 1;
		limpieza = false;
	}
	else
	{
		if (document.getElementById('p2a2').checked)
		{
			resultado = resultado + 2;
			limpieza = false;
		}
		else
		{
			if (document.getElementById('p2a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p2a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p2a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p3a1').checked)
	{
		resultado = resultado + 1;
		puntualidad = false;
	}
	else
	{
		if (document.getElementById('p3a2').checked)
		{
			resultado = resultado + 2;
			puntualidad = false;
		}
		else
		{
			if (document.getElementById('p3a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p3a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p3a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p4a1').checked)
	{
		resultado = resultado + 1;
		responsabilidad = false;
	}
	else
	{
		if (document.getElementById('p4a2').checked)
		{
			resultado = resultado + 2;
			responsabilidad = false;
		}
		else
		{
			if (document.getElementById('p4a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p4a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p4a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p5a1').checked)
	{
		resultado = resultado + 1;
		superacion = false;
	}
	else
	{
		if (document.getElementById('p5a2').checked)
		{
			resultado = resultado + 2;
			superacion = false;
		}
		else
		{
			if (document.getElementById('p5a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p5a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p5a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p6a1').checked)
	{
		resultado = resultado + 1;
		honradez = false;
	}
	else
	{
		if (document.getElementById('p6a2').checked)
		{
			resultado = resultado + 2;
			honradez = false;
		}
		else
		{
			if (document.getElementById('p6a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p6a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p6a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p7a1').checked)
	{
		resultado = resultado + 1;
		respeto = false;
	}
	else
	{
		if (document.getElementById('p7a2').checked)
		{
			resultado = resultado + 2;
			respeto = false;
		}
		else
		{
			if (document.getElementById('p7a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p7a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p7a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p8a1').checked)
	{
		resultado = resultado + 1;
		ley = false;
	}
	else
	{
		if (document.getElementById('p8a2').checked)
		{
			resultado = resultado + 2;
			ley = false;
		}
		else
		{
			if (document.getElementById('p8a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p8a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p8a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p9a1').checked)
	{
		resultado = resultado + 1;
		trabajo = false;
	}
	else
	{
		if (document.getElementById('p9a2').checked)
		{
			resultado = resultado + 2;
			trabajo = false;
		}
		else
		{
			if (document.getElementById('p9a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p9a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p9a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}

	if (document.getElementById('p10a1').checked)
	{
		resultado = resultado + 1;
		ahorro = false;
	}
	else
	{
		if (document.getElementById('p10a2').checked)
		{
			resultado = resultado + 2;
			ahorro = false;
		}
		else
		{
			if (document.getElementById('p10a3').checked)
			{
				resultado = resultado + 3;
			}
			else
			{
				if (document.getElementById('p10a4').checked)
				{
					resultado = resultado + 4;
				}
				else
				{
					if (document.getElementById('p10a5').checked)
					{
						resultado = resultado + 5;
					}
					else
					{
						showResult = false;
					}
				}
			}
		}
	}
	if (showResult)
	{
		/*
		0: Pesimo
		1-10: Muy malo
		11-20: Malo
		21-30: Regular
		31-39: Bueno
		40: Excelente
		*/
		switch(resultado)
		{
		    case 0:
		    	consejo += "Si este es tu verdadero resultado. Algo malo está ocurriendo, toma los siguientes consejos, aplicalos y mejora como persona.<br>";
		        break;

		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		    case 6:
		    case 7:
		    case 8:
		    case 9:
		    case 10:
		    	consejo += "Muchos valores y principios tiene que empezar a aplicarse en tu vida, piensa en lo que tienes que mejorar, hay un largo camino pero se puede lograr, toma los siguientes consejos como guia para mejorar.<br>";
		        break;

		    case 11:
		    case 12:
		    case 13:
		    case 14:
		    case 15:
		    case 16:
		    case 17:
		    case 18:
		    case 19:
		    case 20:
		    	consejo += "La vida puede ser complicada, y a veces no podemos realizar todo lo que quisieramos, pero hay que aprender a aplicar ciertos valores y principios. Aplica lo visto en esta página para mejorar tu vida.<br>";
		        break;

		    case 21:
		    case 22:
		    case 23:
		    case 24:
		    case 25:
		    case 26:
		    case 27:
		    case 28:
		    case 29:
		    case 30:
		    	consejo += "El camino es largo, pero hay cosas que mejorar, esperamos que con este ejercicio notaras cuales son los elementos que debes empezar a mejorar. Crecer como persona, mejorar en distintos ambitos es muy importante para nosotros mismos y la gente que nos rodea. Pon en practica los preceptos presentados en esta pagina.<br>";
		        break;

		    case 31:
		    case 32:
		    case 33:
		    case 34:
		    case 35:
		    case 36:
		    case 37:
		    case 38:
		    case 39:
		    	consejo += "Vas por muy buen camino, es un trayecto largo y arduo, pero que al final nos ayudará a ser mejores personas, crecer en muchos ambitos, sentirnos mejor con nosotros mismos, sentir esa mejora espiritual y fisica. Nos ayuda a concluir muchos proyectos, tener energia e iniciar muchas tareas de forma exitosa en nuestro día a día. El camino aun no acaba, hay cosas por mejorar, no hay que darse por vencidos ni conformarnos con la situación.<br>";
		        break;

		    case 40:
		    	consejo += "¡WOW! Sigue aplicando esa mentalidad en tu día a día.<br>";
		   		break;
		}

		if(!orden)
			{ consejo += "<br>Empieza a agendar prioridades, pon las cosas en su lugar y organiza tus actividades."; }
		if(!limpieza)
			{ consejo += "<br>Identifica que elementos se sienten fuera de lugar en tu día a día, y elimina esos elementos que puedan afectar tu vida."; }
		if(!puntualidad)
			{ consejo += "<br>Toma todos los elementos con anticipación, organiza todo desde antes, si es necesario pon alarmas horas antes de las actividades que debas hacer y cambialas frecuentemente, toma en cuenta el valor que tiene el tiempo para los demás y no lo desperdicies. Empieza a ser puntual desde pequeñas tareas hasta juntas importantes."; }
		if(!responsabilidad)
			{ consejo += "<br>Comprometete contigo mismo, no tomes actividades que no puedas realizar, pero tampoco te desprestigies, eres capaz de realizar muchas cosas, sé responsable y tomalas con total seriedad."; }
		if(!superacion)
			{ consejo += "<br>Atrevete a realizar cosas que nunca has hecho antes, atrevete a ser un lider, a tomar el control y sobretodo ser humilde, agradecer por las oportunidades que se te dan, y sobretodo, contigo por no desaprovecharlas. Sólo es cuestión de actitud."; }
		if(!honradez)
			{ consejo += "<br>Empieza a tomar responsabilidad de tus acciones, de aceptar tus errores, de mejorar constantemente y no culpar a los demás. Ser una persona honrada significa no ser perfecto, si no tomar la responsabilidad de nuestras acciones y sentir plenitud de lo que realizamos."; }
		if(!respeto)
			{ consejo += "<br>Aprende a respetar a los demás, empieza a practicar la empatia. No hagas cosas que no te gustaría que te hicieran a ti."; }
		if(!ley)
			{ consejo += "<br>Toma las distintas leyes y reglamentos que se te aplican, no te toma mucho tiempo empezar a leerlas, respetalas y recuerda que son importantes para el funcionamiento de la organización."; }
		if(!trabajo)
			{ consejo += "<br>Piensa que es lo que te gusta hacer y hazlo. Es importante sentirse bien con uno mismo, y eso se logra cuando realizamos lo que nos gusta hacer. Toma un momento de reflexión para pensar en tus gustos, lo que haz hecho en tu vida, tus metas y que harás en un futuro para completarlas."; }
		if(!ahorro)
			{ consejo += "<br>Inicia el habito del ahorro, inicia con pequeñas cantidades, no importa, pero se debe empezar ese habito que traerá muchos beneficios en un futuro. Puedes empezar ahorrando un porcentaje de tus ganancias, o con monedas de una misma denominación. Incluso por realizar ciertas actividades puedes proponerte dejar una cantidad. Sin importar como lo inicies, manten el habito como algo constatnte y serás bien recompensado en el futuro."; }

		document.getElementById('resultado').innerHTML = consejo;
		document.getElementById('divResultados').style.display = "block";
		window.scroll(0, findPos(document.getElementById("tituloDiagnostico")));
		//alert(consejo);
	}
	else
	{
		alert("Contesta todas las preguntas");
	}
}

function cerrarResultado()
{
	document.getElementById('divResultados').style.display = "none";
}

function checarResultadoActividad()
{
	r1 = document.getElementById('r1').value;
	r2 = document.getElementById('r2').value;
	r3 = document.getElementById('r3').value;
	r4 = document.getElementById('r4').value;
	r5 = document.getElementById('r5').value;
	r6 = document.getElementById('r6').value;
	r7 = document.getElementById('r7').value;
	r8 = document.getElementById('r8').value;
	r9 = document.getElementById('r9').value;
	r10 = document.getElementById('r10').value;
	points = 0;

	if (r1 > 0 && r2 > 0 && r3 > 0 && r4 > 0 && r5 > 0 && r6 > 0 && r7 > 0 && r8 > 0 && r9 > 0 && r10 > 0)
	{
		/*
		r5 - 1
		r3 - 2
		r9 - 3
		r6 - 4
		r1 - 5
		r4 - 6
		r10 - 7
		r2 - 8
		r8 - 9
		r7 - 10
		*/
		if(r1 == 5)
		{
			document.getElementById("d1r1").style.backgroundColor = "#5FCD7D";
			document.getElementById("d2r1").style.backgroundColor = "#5FCD7D";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r1").style.backgroundColor = "#FF3737";
			document.getElementById("d2r1").style.backgroundColor = "#FF3737";
		}

		if(r2 == 8)
		{
			document.getElementById("d1r2").style.backgroundColor = "#34A853";
			document.getElementById("d2r2").style.backgroundColor = "#34A853";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r2").style.backgroundColor = "#D80000";
			document.getElementById("d2r2").style.backgroundColor = "#D80000";
		}
		if(r3 == 2)
		{
			document.getElementById("d1r3").style.backgroundColor = "#5FCD7D";
			document.getElementById("d2r3").style.backgroundColor = "#5FCD7D";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r3").style.backgroundColor = "#FF3737";
			document.getElementById("d2r3").style.backgroundColor = "#FF3737";
		}

		if(r4 == 6)
		{
			document.getElementById("d1r4").style.backgroundColor = "#34A853";
			document.getElementById("d2r4").style.backgroundColor = "#34A853";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r4").style.backgroundColor = "#D80000";
			document.getElementById("d2r4").style.backgroundColor = "#D80000";
		}
		if(r5 == 1)
		{
			document.getElementById("d1r5").style.backgroundColor = "#5FCD7D";
			document.getElementById("d2r5").style.backgroundColor = "#5FCD7D";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r5").style.backgroundColor = "#FF3737";
			document.getElementById("d2r5").style.backgroundColor = "#FF3737";
		}

		if(r6 == 4)
		{
			document.getElementById("d1r6").style.backgroundColor = "#34A853";
			document.getElementById("d2r6").style.backgroundColor = "#34A853";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r6").style.backgroundColor = "#D80000";
			document.getElementById("d2r6").style.backgroundColor = "#D80000";
		}
		if(r7 == 10)
		{
			document.getElementById("d1r7").style.backgroundColor = "#5FCD7D";
			document.getElementById("d2r7").style.backgroundColor = "#5FCD7D";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r7").style.backgroundColor = "#FF3737";
			document.getElementById("d2r7").style.backgroundColor = "#FF3737";
		}

		if(r8 == 9)
		{
			document.getElementById("d1r8").style.backgroundColor = "#34A853";
			document.getElementById("d2r8").style.backgroundColor = "#34A853";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r8").style.backgroundColor = "#D80000";
			document.getElementById("d2r8").style.backgroundColor = "#D80000";
		}
		if(r9 == 3)
		{
			document.getElementById("d1r9").style.backgroundColor = "#5FCD7D";
			document.getElementById("d2r9").style.backgroundColor = "#5FCD7D";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r9").style.backgroundColor = "#FF3737";
			document.getElementById("d2r9").style.backgroundColor = "#FF3737";
		}

		if(r10 == 7)
		{
			document.getElementById("d1r10").style.backgroundColor = "#34A853";
			document.getElementById("d2r10").style.backgroundColor = "#34A853";
			points = points + 1;
		}
		else
		{
			document.getElementById("d1r10").style.backgroundColor = "#D80000";
			document.getElementById("d2r10").style.backgroundColor = "#D80000";
		}

		if (points == 10)
		{
			alert("Felicidades");
		}
	}
	else
	{
		alert("Completa todas las columnas");
	}
}