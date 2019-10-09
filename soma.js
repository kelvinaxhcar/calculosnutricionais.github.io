function calcular() {
  var valor1 = document.calcform.valor1.value;
  var valor2 = document.calcform.valor2.value;

    
     var res  = parseInt(valor1) / (parseInt(valor2*valor2*100));
     res=res *100;

     

     if (res <= 17) {
     document.calcform.con.value = "Muito abaixo do peso";
      } else {if (res >= 17 & res <= 18.49) {
         document.calcform.con.value = "Abaixo do peso";
        } else {if ( res >=18.5 & res <=24.99) {
           document.calcform.con.value = "Peso normal";
            } else {if (res >=25 & res <= 29.99) {
               document.calcform.con.value = "Acima do peso";
              } else {if (res >= 30 & res<=34.99) {
                 document.calcform.con.value = "Obesidade I";
               } else {if (res >= 35 & res <= 39.99) {
                  document.calcform.con.value = "Obesidade II";
                 } else {if (res >=40) {
                document.calcform.con.value = "Obesidade III";
                }
              }
            }
          }
        }
      }   
   }

   
  document.calcform.res.value = res.toFixed(2);
}


function calcularIndice(oper) {

  var valor1 = document.calcform.valor1.value;
  var valor2 = document.calcform.valor2.value;
  var idade = document.calcform.idade.value;
  

    
     var res = parseInt(valor1) / (parseInt(valor2*valor2*100));
     res=res *100;


   if (oper == "masculino") {
    var indice = (1.20 * res) + (0.23 * idade) - (10.8*1) - 5.4;
    } else {
       indice = (1.20 * res) + (0.23 * idade) - (10.8*0) - 5.4;
       } 
    
       document.calcform.indice.value = indice.toFixed(2);

// <-------------------------------------------Feminino------------------------------------->

      // Estrutura de decisão genero feminino entre 20 a 29 anos      
       if (oper == "feminino" & idade >= 20 & idade <=29) {
          if (indice <=10.7 ) {
            indiceCom = "Muito magro";
           } else {if ( indice >=10.8 & indice <=17) {
            indiceCom = "Magro";
               } else {if (indice >=17.1 & indice <= 20.5) {
                indiceCom = "Muito bom";
                 } else {if (indice >= 20.6 & indice<= 23.8) {
                  indiceCom = "Saldável";
                  } else {if (indice >= 23.9 & indice <= 27.6) {
                    indiceCom = "Sobrepeso";
                    } else {if (indice >=27.7 & indice <=35.5) {
                      indiceCom = "Gordo";
                      } else {if (indice >=35.6) {
                        indiceCom = "Muito gordo";
                    }
                   }
                 }
               }
             }
           }
         }   
      }

      // Estrutura de decisão genero feminino entre 30 a 39 anos      
      if (oper == "feminino" & idade >= 30 & idade <=39) {
        if (indice <=13.3 ) {
          indiceCom = "Muito magro";
         } else {if ( indice >=13.4 & indice <=18) {
          indiceCom = "Magro";
             } else {if (indice >=18.1 & indice <= 21.8) {
              indiceCom = "Muito bom";
               } else {if (indice >= 21.9 & indice<= 24.8) {
                indiceCom = "Saldável";
                } else {if (indice >= 24.9 & indice <= 30) {
                  indiceCom = "Sobrepeso";
                  } else {if (indice >=30.1 & indice <=35.8) {
                    indiceCom = "Gordo";
                    } else {if (indice >=35.9) {
                      indiceCom = "Muito gordo";
                  }
                 }
               }
             }
           }
         }
       }   
    }

    // Estrutura de decisão genero feminino entre 40 a 49 anos      
    if (oper == "feminino" & idade >= 40 & idade <=49) {
      if (indice <=16.1 ) {
        indiceCom = "Muito magro";
       } else {if ( indice >=16.2 & indice <=21.4) {
        indiceCom = "Magro";
           } else {if (indice >=21.5 & indice <= 25.1) {
            indiceCom = "Muito bom";
             } else {if (indice >= 25.2 & indice<= 28.3) {
              indiceCom = "Saldável";
              } else {if (indice >= 28.4 & indice <= 32.1) {
                indiceCom = "Sobrepeso";
                } else {if (indice >=22.2 & indice <=37.7) {
                  indiceCom = "Gordo";
                  } else {if (indice >=37.8) {
                    indiceCom = "Muito gordo";
                }
               }
             }
           }
         }
       }
     }   
  }

  // Estrutura de decisão genero feminino entre 50 a 59 anos      
  if (oper == "feminino" & idade >= 50 & idade <=59) {
    if (indice <=18.8 ) {
      indiceCom = "Muito magro";
     } else {if ( indice >=18.9 & indice <=25.1) {
      indiceCom = "Magro";
         } else {if (indice >=25.2 & indice <= 28.6) {
          indiceCom = "Muito bom";
           } else {if (indice >= 28.7 & indice<= 32.5) {
            indiceCom = "Saldável";
            } else {if (indice >= 32.6 & indice <= 35.6) {
              indiceCom = "Sobrepeso";
              } else {if (indice >=35.7 & indice <=39.6) {
                indiceCom = "Gordo";
                } else {if (indice >=39.7) {
                  indiceCom = "Muito gordo";
              }
             }
           }
         }
       }
     }
   }   
}

// Estrutura de decisão genero feminino maior que 60 anos      
if (oper == "feminino" & idade >= 60) {
  if (indice <=10.7 ) {
    indiceCom = "Muito magro";
   } else {if ( indice >=10.8 & indice <=17) {
    indiceCom = "Magro";
       } else {if (indice >=17.1 & indice <= 20.5) {
        indiceCom = "Muito bom";
         } else {if (indice >= 20.6 & indice<= 23.8) {
          indiceCom = "Saldável";
          } else {if (indice >= 23.9 & indice <= 27.6) {
            indiceCom = "Sobrepeso";
            } else {if (indice >=27.7 & indice <=35.5) {
              indiceCom = "Gordo";
              } else {if (indice >=35.6) {
                indiceCom = "Muito gordo";
            }
           }
         }
       }
     }
   }
 }   
}

// Estrutura de decisão genero feminino entre 20 a 29 anos      
       if (oper == "feminino" & idade >= 20 & idade <=29) {
          if (indice <=10.7 ) {
            indiceCom = "Muito magro";
           } else {if ( indice >=10.8 & indice <=17) {
            indiceCom = "Magro";
               } else {if (indice >=17.1 & indice <= 20.5) {
                indiceCom = "Muito bom";
                 } else {if (indice >= 20.6 & indice<= 23.8) {
                  indiceCom = "Saldável";
                  } else {if (indice >= 23.9 & indice <= 27.6) {
                    indiceCom = "Sobrepeso";
                    } else {if (indice >=27.7 & indice <=35.5) {
                      indiceCom = "Gordo";
                      } else {if (indice >=35.6) {
                        indiceCom = "Muito gordo";
                    }
                   }
                 }
               }
             }
           }
         }   
      }

      // Estrutura de decisão genero feminino entre 30 a 39 anos      
      if (oper == "feminino" & idade >= 30 & idade <=39) {
        if (indice <=13.3 ) {
          indiceCom = "Muito magro";
         } else {if ( indice >=13.4 & indice <=18) {
          indiceCom = "Magro";
             } else {if (indice >=18.1 & indice <= 21.8) {
              indiceCom = "Muito bom";
               } else {if (indice >= 21.9 & indice<= 24.8) {
                indiceCom = "Saldável";
                } else {if (indice >= 24.9 & indice <= 30) {
                  indiceCom = "Sobrepeso";
                  } else {if (indice >=30.1 & indice <=35.8) {
                    indiceCom = "Gordo";
                    } else {if (indice >=35.9) {
                      indiceCom = "Muito gordo";
                  }
                 }
               }
             }
           }
         }
       }   
    }

    // Estrutura de decisão genero feminino entre 40 a 49 anos      
    if (oper == "feminino" & idade >= 40 & idade <=49) {
      if (indice <=16.1 ) {
        indiceCom = "Muito magro";
       } else {if ( indice >=16.2 & indice <=21.4) {
        indiceCom = "Magro";
           } else {if (indice >=21.5 & indice <= 25.1) {
            indiceCom = "Muito bom";
             } else {if (indice >= 25.2 & indice<= 28.3) {
              indiceCom = "Saldável";
              } else {if (indice >= 28.4 & indice <= 32.1) {
                indiceCom = "Sobrepeso";
                } else {if (indice >=22.2 & indice <=37.7) {
                  indiceCom = "Gordo";
                  } else {if (indice >=37.8) {
                    indiceCom = "Muito gordo";
                }
               }
             }
           }
         }
       }
     }   
  }

  // Estrutura de decisão genero feminino entre 50 a 59 anos      
  if (oper == "feminino" & idade >= 50 & idade <=59) {
    if (indice <=18.8 ) {
      indiceCom = "Muito magro";
     } else {if ( indice >=18.9 & indice <=25.1) {
      indiceCom = "Magro";
         } else {if (indice >=25.2 & indice <= 28.6) {
          indiceCom = "Muito bom";
           } else {if (indice >= 28.7 & indice<= 32.5) {
            indiceCom = "Saldável";
            } else {if (indice >= 32.6 & indice <= 35.6) {
              indiceCom = "Sobrepeso";
              } else {if (indice >=35.7 & indice <=39.6) {
                indiceCom = "Gordo";
                } else {if (indice >=39.7) {
                  indiceCom = "Muito gordo";
              }
             }
           }
         }
       }
     }
   }   
}

// Estrutura de decisão genero feminino maior que 60 anos      
if (oper == "feminino" & idade >= 60) {
  if (indice <=10.7 ) {
    indiceCom = "Muito magro";
   } else {if ( indice >=10.8 & indice <=17) {
    indiceCom = "Magro";
       } else {if (indice >=17.1 & indice <= 20.5) {
        indiceCom = "Muito bom";
         } else {if (indice >= 20.6 & indice<= 23.8) {
          indiceCom = "Saldável";
          } else {if (indice >= 23.9 & indice <= 27.6) {
            indiceCom = "Sobrepeso";
            } else {if (indice >=27.7 & indice <=35.5) {
              indiceCom = "Gordo";
              } else {if (indice >=35.6) {
                indiceCom = "Muito gordo";
            }
           }
         }
       }
     }
   }
 }   
}

// <-------------------------------------------Masculino------------------------------------->

// Estrutura de decisão genero masculino entre 20 a 29 anos      
if (oper == "masculino" & idade >= 20 & idade <=29) {
  if (indice <=5.2 ) {
    indiceCom = "Muito magro";
   } else {if ( indice >=5.3 & indice <=9.3) {
    indiceCom = "Magro";
       } else {if (indice >=9.4 & indice <= 14.01) {
        indiceCom = "Muito bom";
         } else {if (indice >= 14.02 & indice<= 17.5) {
          indiceCom = "Saldável";
          } else {if (indice >= 17.6 & indice <= 22.4) {
            indiceCom = "Sobrepeso";
            } else {if (indice >=22.5 & indice <=29.2) {
              indiceCom = "Gordo";
              } else {if (indice >=29.3) {
                indiceCom = "Muito gordo";
            }
           }
         }
       }
     }
   }
 }   
}

// Estrutura de decisão genero masculino entre 30 a 39 anos      
if (oper == "masculino" & idade >= 30 & idade <=39) {
if (indice <=9.2 ) {
  indiceCom = "Muito magro";
 } else {if ( indice >=9.3 & indice <=14) {
  indiceCom = "Magro";
     } else {if (indice >=14.1 & indice <= 17.5) {
      indiceCom = "Muito bom";
       } else {if (indice >= 17.6 & indice<= 20.6) {
        indiceCom = "Saldável";
        } else {if (indice >= 20.7 & indice <= 24.2) {
          indiceCom = "Sobrepeso";
          } else {if (indice >=24.3 & indice <=30) {
            indiceCom = "Gordo";
            } else {if (indice >=30.1) {
              indiceCom = "Muito gordo";
          }
         }
       }
     }
   }
 }
}   
}

// Estrutura de decisão genero masculino entre 40 a 49 anos      
if (oper == "masculino" & idade >= 40 & idade <=49) {
if (indice <=11.5 ) {
indiceCom = "Muito magro";
} else {if ( indice >=11.6 & indice <=16.3) {
indiceCom = "Magro";
   } else {if (indice >=16.4 & indice <= 19.6) {
    indiceCom = "Muito bom";
     } else {if (indice >= 19.7 & indice<= 22.5) {
      indiceCom = "Saldável";
      } else {if (indice >= 22.6 & indice <= 26.2) {
        indiceCom = "Sobrepeso";
        } else {if (indice >=26.3 & indice <=31.4) {
          indiceCom = "Gordo";
          } else {if (indice >=31.5) {
            indiceCom = "Muito gordo";
        }
       }
     }
   }
 }
}
}   
}

// Estrutura de decisão genero masculino entre 50 a 59 anos      
if (oper == "masculino" & idade >= 50 & idade <=59) {
if (indice <=12.9 ) {
indiceCom = "Muito magro";
} else {if ( indice >=13 & indice <=18.1) {
indiceCom = "Magro";
 } else {if (indice >=18.2 & indice <= 21.2) {
  indiceCom = "Muito bom";
   } else {if (indice >= 21.3 & indice<= 24.2) {
    indiceCom = "Saldável";
    } else {if (indice >= 24.3 & indice <= 27.6) {
      indiceCom = "Sobrepeso";
      } else {if (indice >=27.7 & indice <=32.4) {
        indiceCom = "Gordo";
        } else {if (indice >=32.5) {
          indiceCom = "Muito gordo";
      }
     }
   }
 }
}
}
}   
}

// Estrutura de decisão genero masculino maior que 60 anos      
if (oper == "masculino" & idade >= 60) {
if (indice <=13 ) {
indiceCom = "Muito magro";
} else {if ( indice >=13.1 & indice <=18.5) {
indiceCom = "Magro";
} else {if (indice >=18.6 & indice <= 22) {
indiceCom = "Muito bom";
 } else {if (indice >= 22.1 & indice<= 25) {
  indiceCom = "Saldável";
  } else {if (indice >= 25.1 & indice <= 28.4) {
    indiceCom = "Sobrepeso";
    } else {if (indice >=28.5 & indice <=33.5) {
      indiceCom = "Gordo";
      } else {if (indice >=33.6) {
        indiceCom = "Muito gordo";
    }
   }
 }
}
}
}
}   
}
document.calcform.indiceCom.value = indiceCom; 

  
}
