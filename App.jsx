import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Slider } from '@/components/ui/slider.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Brain, Volume2, Download, Play, Pause, Sparkles, Star, Users, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [subliminalText, setSubliminalText] = useState('')
  const [voice, setVoice] = useState('')
  const [backgroundSound, setBackgroundSound] = useState('')
  const [duration, setDuration] = useState([10])
  const [volume, setVolume] = useState([20])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedAudio, setGeneratedAudio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleGenerate = async () => {
    if (!subliminalText.trim() || !voice || !backgroundSound) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    setIsGenerating(true)
    
    // Simular geração de áudio (em um app real, isso seria uma chamada para API)
    setTimeout(() => {
      setGeneratedAudio({
        url: '#',
        filename: `subliminal_${Date.now()}.mp3`,
        duration: duration[0]
      })
      setIsGenerating(false)
    }, 3000)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">Subliminal Generator</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Início</a>
              <a href="#generator" className="text-white/80 hover:text-white transition-colors">Gerador</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Planos</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Crie Áudios <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Subliminares</span> com IA
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Transforme seus objetivos em poderosos áudios subliminares personalizados. 
              Nossa IA avançada cria mensagens que seu subconsciente absorve naturalmente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
                <Sparkles className="mr-2 h-5 w-5" />
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/60">Áudios Criados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5,000+</div>
              <div className="text-white/60">Usuários Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/60">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Gerador de Subliminares</h3>
              <p className="text-white/80 text-lg">Configure seu áudio subliminar personalizado</p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                  Configurações do Subliminar
                </CardTitle>
                <CardDescription className="text-white/60">
                  Personalize cada aspecto do seu áudio subliminar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Texto do Subliminar */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Objetivo ou Afirmação *
                  </label>
                  <Textarea
                    placeholder="Ex: Eu sou confiante e bem-sucedido em tudo que faço..."
                    value={subliminalText}
                    onChange={(e) => setSubliminalText(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    rows={4}
                  />
                  <p className="text-white/60 text-sm mt-1">
                    Descreva seu objetivo ou escreva afirmações positivas
                  </p>
                </div>

                {/* Seleção de Voz */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Tipo de Voz *
                  </label>
                  <Select value={voice} onValueChange={setVoice}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Escolha o tipo de voz" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female-calm">Feminina Calma</SelectItem>
                      <SelectItem value="female-energetic">Feminina Energética</SelectItem>
                      <SelectItem value="male-deep">Masculina Grave</SelectItem>
                      <SelectItem value="male-soft">Masculina Suave</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Som de Fundo */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Som de Fundo *
                  </label>
                  <Select value={backgroundSound} onValueChange={setBackgroundSound}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Escolha o som de fundo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rain">Chuva Suave</SelectItem>
                      <SelectItem value="ocean">Ondas do Mar</SelectItem>
                      <SelectItem value="forest">Floresta</SelectItem>
                      <SelectItem value="white-noise">Ruído Branco</SelectItem>
                      <SelectItem value="meditation">Música Meditativa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Duração */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Duração: {duration[0]} minutos
                  </label>
                  <Slider
                    value={duration}
                    onValueChange={setDuration}
                    max={60}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                </div>

                {/* Volume da Voz Subliminar */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Volume da Voz Subliminar: {volume[0]}%
                  </label>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={50}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                  <p className="text-white/60 text-sm mt-1">
                    Recomendado: 15-25% para efeito subliminar ideal
                  </p>
                </div>

                {/* Botão Gerar */}
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Gerando Subliminar...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Gerar Subliminar
                    </>
                  )}
                </Button>

                {/* Resultado */}
                {generatedAudio && (
                  <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <h4 className="text-white font-medium mb-3 flex items-center">
                      <Volume2 className="mr-2 h-5 w-5 text-green-400" />
                      Seu Subliminar está Pronto!
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="text-white/80">
                        <p>Arquivo: {generatedAudio.filename}</p>
                        <p>Duração: {generatedAudio.duration} minutos</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          onClick={togglePlay}
                          variant="outline"
                          size="sm"
                          className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-8">Como Funcionam os Subliminares?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <Brain className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Mensagens Subliminares</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Afirmações positivas são reproduzidas em volume baixo, 
                    permitindo que seu subconsciente as absorva naturalmente.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <Volume2 className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Sons Relaxantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Sons de fundo como chuva ou natureza criam um ambiente 
                    relaxante e facilitam a absorção das mensagens.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <Sparkles className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Resultados Graduais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Com uso regular, as mensagens positivas ajudam a 
                    reprogramar padrões mentais e alcançar seus objetivos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Escolha Seu Plano</h3>
              <p className="text-white/80 text-lg">Comece gratuitamente ou desbloqueie recursos premium</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Plano Gratuito */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Gratuito</CardTitle>
                  <CardDescription className="text-white/60">
                    Perfeito para começar
                  </CardDescription>
                  <div className="text-4xl font-bold text-white">R$ 0</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      3 subliminares por dia
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      Duração até 15 minutos
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      5 sons de fundo
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      2 tipos de voz
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white">
                    Começar Grátis
                  </Button>
                </CardContent>
              </Card>

              {/* Plano Premium */}
              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-purple-500/30 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Mais Popular
                </Badge>
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Premium</CardTitle>
                  <CardDescription className="text-white/60">
                    Acesso completo e ilimitado
                  </CardDescription>
                  <div className="text-4xl font-bold text-white">R$ 19,90<span className="text-lg text-white/60">/mês</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      Subliminares ilimitados
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      Duração até 60 minutos
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      15+ sons de fundo
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      8 tipos de voz
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      Sem anúncios
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      Download em alta qualidade
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Assinar Premium
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-white font-bold text-lg">Subliminal Generator</span>
            </div>
            <p className="text-white/60 mb-4">
              Transforme sua mente, transforme sua vida.
            </p>
            <div className="flex justify-center space-x-6 text-white/60">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
            <p className="text-white/40 text-sm mt-4">
              © 2024 Subliminal Generator. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

