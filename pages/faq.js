import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet,RefreshControl ,FlatList ,TouchableOpacity ,Image,ImageBackground ,CheckBox,AsyncStorage } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';



import header from './headerStyle';








export default class FAQ extends Component{
  
    constructor(props){
        super(props);
        this.state={
         
        };
    }

    
    

    render(){

        return(

            <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={header.header_wrapper}>
            <View style={header.wrap}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon  style={header.backbtn} name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={header.tagline}>Viralizing{'\n'}Your Brand</Text>
            </View>
            </View>
            <ScrollView style={header.createSection_ws}>
      
                  <View style={[{paddingLeft:20,paddingTop:5}]}> 
                      <Text style={header.heading_g}>FAQs</Text>
                  </View>
                
                <View style={{marginLeft:'2%',marginRight:'2%'}}>
                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        What is GenZ360 ?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5,textAlign:'justify'}}>GenZ360 is an online Nano Influencer
                         platform which helps the brands to collaborate directly with the
                        Nano Influencers, the everyday people. It’s a platform which provides services like Branding &amp; PR,
                        Video &amp; Content based marketing, Brand viralization, Lead generation, App promotion and many
                        more, leveraging the efforts &amp; social activities of the Nano Influencers.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        Why should I use GenZ360?                   </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>GenZ-360 is one of the most authentic online platform which encourages the socially active
commoners to be our Nano members and get exposed to regular Brand campaigns. The platform gives
you the confidence to be Influencers. It creates opportunities for you to do small tasks in your free
time thus helping you to increase the share of your wallet through the Gz coins.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How can I start earning money?                    </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>You can easily start earning by taking part in the campaign. Tasks will be assigned to you, once you
apply for a campaign in the “daily task section”. You are expected to complete the task to get Gz coins
on your Gz wallet.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How do I participate in a campaign?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>1. Please check the “Live campaign section” and browse for the campaign to check campaign
description and then apply for the campaigns which seem suitable for you.{'\n'}
2. Click on “Apply campaign” to participate.{'\n'}
3. You will be notified once your application gets approved.{'\n'}
4. Follow the flow of the daily task section to complete the campaign.</Text>
                    </View>

                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        What is the process of user generated campaign?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>1. Influencers are supposed to generate the content as per the instructions (KPIs) given in the
campaign description.{'\n'}
2. Create the content.{'\n'}
3. Content could be in the form of text, write up, blogs, images, memes, videos or voiceovers.{'\n'}
4. Upload the content for approval.{'\n'}
5. The brand has the right to approve or reject the content.{'\n'}
6. The influencers will be notified online.{'\n'}
7. If approved, share the content on your social media pages &amp; handles.</Text>
                    </View>
                    
                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        What do I do after applying for a campaign?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>Once your application is approved, kindly follow the instructions given in the daily task section.</Text>
                    </View>

                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        What are the deadlines for taking action on the tasks been assigned after the approval for
participating in the campaign?
                       </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>1. 12 hours for sharing the brand creatives on your socia media pages & handles.
2. Please upload the URL of the post on the GenZ360 application.
3. This is application for all services.</Text>
                    </View>

                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        What if I post the creative on my social media pages &amp; handles but don’t upload the URL on GenZ360
application?                       </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>In this case, you will not be considered as a participant for the campaign and your application will be
rejected after 12 hours. You will not be paid for the same.</Text>
                    </View>


          
                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How much time should I keep the post live on my social media pages &amp; handles?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>You should keep the post live at least till the competition of the campaign. However, we suggest you
to keep it live for as long as you want to gain more reach &amp; engagement, thus building a strong
credibility.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How much do I earn from a campaign?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>You earn from each campaign and the earning gets reflected on your Gz wallet. The earnings vary from
campaign to campaign. You will have the option to check the price in the campaign description, while
applying for the campaign.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How many campaigns can a Nano influencer participate at a time or within a week?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>An influencer can participate in multiple campaigns on GenZ360. There is no such restriction on the
participation.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How much time will it take to credit your earnings to your Gz wallet, after the completion of a
campaign?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>On competition of a campaign, a Brand takes anytime between 15 to 40 days to audit the outcome as
per the KPIs set earlier. On receiving the confirmation from the Brand, your Gz wallet will be credited
with Gz coins which in turn can be redeemed.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How can I track my performance on the basis of campaign participated?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>Your performance can be tracked as per the process flow:
1. Click on campaign history.
2. Open a campaign.
3. Click on view performance.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How can I connect my social media pages &amp; handles after registration?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}> You can connect your social media accounts after registration as per the process flow:
1. Click on Profile section.
2. Update social media accounts.
3. Select platform.
4. Authenticate your account.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        Does GenZ360 make any changes to my social media accounts upon permission to integrate with
this Application?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}> GenZ360 doesn’t make any change to your social media account. We only get the rights to use the API
to authenticate your social media accounts and track the performance of the post shared on social
media pages &amp; handles.</Text>
                    </View>

                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        What is Gz coin? How is this related with rupee?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>Gz coin is a nomenclature, representing your earnings which gets added to your Gz wallet.
1 Gz coin earned on your Gz wallet = Re 1 earned.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        What is Gz coin? How is this related with rupee?
                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>Gz coin is a nomenclature, representing your earnings which gets added to your Gz wallet.
1 Gz coin earned on your Gz wallet = Re 1 earned.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How to withdraw the earnings from the Gz wallet?                        </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>You can withdraw the money by linking your PayTM wallet with the Gz wallet, thus allowing you to
redeem through the PayTM wallet. The process follow is given below:
1. Go to “Wallet section”.
2. Click “withdraw money”.
3. Select the PayTM wallet to redeem.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How do I update my profile?                       </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>Please follow steps:
1. Click on the profile section.
2. Click on the update profile.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        How do I reset the password?                     </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>Please follow steps:
1. Click on the Profile section.
2. Click on Reset password link.
3. Type the Current password.
4. Type the New password.
5. Click Reset Password.</Text>
                    </View>


                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        Can I edit my registered contact number or email address?                </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>Please generate a request by writing to info@genz360.com. You will be asked to verify the account.
After verification, your registered email id and contact number will be changed by the Admin.</Text>
                    </View>



                    <View style={{flexDirection:'column',textAlign:'justify'}}>
                        <Text style={{fontFamily:'Gilroy-ExtraBold',fontSize:17,color:'#000',marginTop:15}}>
                        Is there any Email id to assist the Influencers?                   </Text>
                        <Text style={{fontFamily:'SF',fontSize:16,color:'#000',marginTop:5}}>We will be happy to assist and guide our esteemed Nano influencers. You are very precious to us.
Please feel free to write your query on info@genz360.com and we will revert at the earliest.</Text>
                    </View>



                </View>
                    <View style={{paddingTop:30}}></View>
                </ScrollView>
                
     
     
     </ScrollView>
        );
    }
}


