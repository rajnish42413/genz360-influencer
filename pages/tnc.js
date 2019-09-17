import React , {Component} from 'react';
import {ScrollView, View, Text, TextInput ,StyleSheet,RefreshControl ,FlatList ,TouchableOpacity ,Image,ImageBackground ,CheckBox,AsyncStorage } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import header from './headerStyle';



export default class TNC extends Component{
  
    constructor(props){
        super(props);
        this.state={
         
        };
    }

    componentDidMount(){
        Font.loadAsync({
            'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
            'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
            'SF': require('../assets/fonts/SF.ttf'),
          });
    }
    

    render(){

        return(

            <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={header.header_wrapper}>
            <View style={header.wrap}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon  style={header.backbtn} name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={header.tagline}>Cash{'\n'}Your Connect</Text>
            </View>
            </View>
            <ScrollView style={header.createSection_ws}>
      
                  <View style={[{paddingLeft:20,paddingTop:5}]}> 
                      <Text style={header.heading_g}>Terms &amp; Conditions</Text>
                  </View>
                
                <View style={{marginLeft:'2%',marginRight:'2%',marginTop:15}}> 
                    <Text style={{fontFamily:'SF',color:'#000',fontSize:17}}>
                    This is a legal agreement between you, the potential user of this mobile application ('you') and GenZ-360 ('Us' 'GenZ-
360'). Your use of GenZ-360's products, services and mobile application or any of the products and services offered on
this mobile application (collectively, the 'Services') is conditioned on your acceptance without modification of these
Terms of Service ('Terms'). {'\n'}{'\n'}
Please read these Terms carefully. If you do not agree to these Terms, you should not use the Services and Mobile
application of GenZ-360. You can accept the Terms simply by using the GenZ-360 Services. In this case, you understand
and agree that GenZ-360 will consider your use of the Services as agreement to the Terms. {'\n'} {'\n'}
GenZ-360 may at its sole discretion modify these Terms at any time without any prior information to user.
Your use of GenZ-360 mobile application (hereinafter referred to as 'GenZ-360') and services and tools are governed by
the following terms and conditions as applicable to the GenZ-360. If you transact on GenZ-360, you shall be subject to the
policies that are applicable to the mobile application for such transaction. {'\n'} {'\n'}
We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out
of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the present limit
mutually agreed by us with our acquiring bank from time to time {'\n'} {'\n'}
When you use any of the services provided by the GenZ-360, you will be subject to the rules, guidelines, policies, terms,
and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be
considered as part of this Terms of Use. GenZ-360 reserves the right, at its sole discretion, to change, modify, add or
remove portions of these Terms of Use, at any time. It is your responsibility to check these Terms of Use periodically for
changes. Your continued use of the mobile application following the posting of changes will mean that you accept and
agree to the changes. As long as you comply with these Terms of Use, GenZ-360 grants you a personal, non-exclusive,
non-transferable, limited privilege to enter and use the App. {'\n'} {'\n'}

ACCESSING, BROWSING OR OTHERWISE USING THE MOBILE APPLICATION INDICATES YOUR AGREEMENT TO ALL THE
TERMS AND CONDITIONS IN THIS AGREEMENT, SO PLEASE READ THIS AGREEMENT CAREFULLY BEFORE PROCEEDING. {'\n'} {'\n'}

<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>YOUR ACCOUNT AND REGISTRATION OBLIGATIONS </Text> {'\n'} {'\n'}
If you use GenZ-360, you shall be responsible for maintaining the confidentiality of your User ID and Password and you
shall be responsible for all activities that occur under your User ID and Password. You agree that if you provide any
information that is untrue, inaccurate, not current or incomplete or GenZ-360 has reasonable grounds to suspect that
such information is untrue, inaccurate, not current or incomplete, or not in accordance with the this Terms of Use, GenZ-
360 has the right to indefinitely suspend or terminate or block access of your membership with GenZ-360 and refuse to
provide you with access to the GenZ-360 Mobile Application.{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>COMMUNICATIONS</Text>{'\n'} {'\n'}
When You use the Mobile application of GenZ-360 or send emails or other data, information or communication to GenZ-
360, You agree and understand that You are communicating with GenZ-360 through electronic records and You consent
to receive communications via electronic records (Email, SMS, Notifications etc.) from GenZ-360 periodically and when
required. GenZ-360 may communicate with You by email or by such other mode of communication, electronic or
otherwise.{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>CHARGES</Text>{'\n'} {'\n'}
Registration on GenZ-360 is free. GenZ-360 does not charge any fee for browsing but there are applicable charges for
buying services on GenZ-360. In addition, GenZ-360 reserves the right to charge fee and change its policies from time to
time. In particular, GenZ-360 may at its sole discretion introduce new services and modify some or all of the existing
services offered on the GenZ-360. In such an event GenZ-360 reserves, without notice to You, the right to introduce fees
for the new services offered or amend/introduce fees for existing services, as the case may be. Changes to the Fee and
related policies shall automatically become effective immediately once implemented on GenZ-360. Unless otherwise
stated, all fees shall be quoted in Indian Rupees. You shall be solely responsible for compliance of all applicable laws
including those in India for making payments to GenZ-360.


{'\n'} {'\n'}

<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>USE OF GENZ-360 SERVICES</Text>{'\n'} {'\n'}
You agree, undertake and confirm that your use of GenZ-360 shall be strictly governed by the following binding principles:
You shall not host, display, upload, modify, publish, transmit, and update any information:{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>1</Text> That belongs to another person and to which you do not have any right to{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>2</Text>  Is misleading in any way{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>3</Text>  Is patently offensive to the online community, such as sexually explicit content, or content that promotes
obscenity, pedophilia, racism, bigotry, hatred or physical harm of any kind against any group or individual.{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>4</Text>  Involves the transmission of 'junk mail, 'chain letters,' or unsolicited mass mailing or 'spamming'.{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>5</Text>  That promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libelous.{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>6</Text>  That infringes upon or violates any third party's rights including, but not limited to, intellectual property rights,
rights of privacy (including without limitation unauthorized disclosure of a person's name, email address, physical{'\n'} {'\n'}
address or phone number) or rights of publicity.{'\n'} {'\n'}
<Text style={{fontSize:20,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>LICENSE TO YOUR CONTENT</Text>{'\n'} {'\n'}
<Text style={{fontSize:17,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>BRANDS :-</Text>{'\n'} {'\n'}

GenZ-360 allows brands to submit content, including videos, photos, and other materials which is used by nano
influencers for promoting the brands by posting the content on their social media profile. {'\n'} {'\n'}
As Brand you are solely responsible for, the Content which is posted to the Services. However, by submitting Content to
the Services, you hereby grant GenZ-360 a worldwide, non-exclusive, paid up and royalty-free, sublicenseable and
transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the Content in
connection with the Services and GenZ-360's (and its successors, affiliates', partners’ &amp; influencers’) business, including
without limitation for promoting and redistributing part or all of the Services (and derivative works thereof) in any media
formats and through any media channels.{'\n'} {'\n'}
Brands also hereby grant influencers a non-exclusive license to access Content through the Services, and to use,
reproduce, distribute, display, and perform such Content as permitted through the functionality of the Services and under
these Terms. understand that GenZ-360 does not guarantee any confidentiality with respect to any Content which is
submitted to us.{'\n'} {'\n'}
You shall be solely responsible for your own Content and the consequences of submitting and publishing the Content on
the Services. You affirm, represent, and warrant that you own or have the necessary rights, licenses, permissions, and
consents necessary to publish any Content you submit. Brands further agree that all User Content submitted to the
Services will not contain third party copyrighted material, or material that is subject to other third party proprietary or
other rights, unless you have permission from the rightful owner of the material, or you are otherwise legally entitled to
post the material and to grant GenZ-360 all of the rights granted herein.{'\n'} {'\n'}
Brands hereby grant that they have rights to use the submitted content for running a campaign through GenZ-360. None
of our influencer or GenZ-360 will be responsible for any copyright issues or for any damage and issues related to content.
While submitting a campaign brands allow GenZ-360’s influencers to share the submitted content on their social media
handles.
{'\n'} {'\n'}
<Text style={{fontSize:17,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>INFLUENCER'S :-</Text>{'\n'} {'\n'}
Influencers have to share the content which is attached with the campaign. They would be responsible for the copyright
issues if they share any other content on the place of the content which is attached to a particular campaign (GenZ-360 or
Brand partners won’t be responsible for same).
{'\n'} {'\n'}

<Text style={{fontSize:20,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>PAYMENT TERMS</Text>{'\n'} {'\n'}

{/* <Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>BRANDS :-</Text>{'\n'} {'\n'}
Payments shall be made while submitting the campaign on GenZ-360. As a creator you shall ensure you adhere to all
terms and conditions and guidelines stated on respective platforms/medium.{'\n'} {'\n'}
While making the payment you should agree that estimated budget, reach, duration is on the basis of assumptions only. It
is just to indicate some hints for the brands, It doesn’t claim any kind of guarantee and Brand has no rights to take any
action against the result of actual performance of the campaign. There is no provision of refund. Your final payment will
bear taxes as applicable.{'\n'} {'\n'}
GenZ-360 uses a third party platform for receiving a payment, We won’t be responsible for any kind of transaction failure
or damage happens during the time of transaction. Brands are requested to check the same with the payment gateway
provider.{'\n'} {'\n'}
Invoice, notification and message against the payment will be sent via email/sms using third party platform. GenZ-360
won’t be responsible for any loss of invoices and notifications.{'\n'} {'\n'}
All Payment will be made online in advance.{'\n'} {'\n'} */}
<Text style={{fontSize:20,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>INFLUENCERS:-</Text>{'\n'} {'\n'}
Payment against the sharing of content will be made in the form of “GZ cash” which can be redeemed using the digital
wallet (like Paytm, Phonepe){'\n'} {'\n'}
GZ Cash will be credited after reviewing the performance of the post shared by a Influencer on their social media account.
Payment can be denied if the post doesn’t work as per the expectation.{'\n'} {'\n'}
When an influencer shares a post on Facebook/Twitter/YouTube/Instagram the post must be Public(so that it is visible to
all) and should be visible for next 30 days. Also no other post should be done for next 24 hours to increase the reach of
the post.{'\n'} {'\n'}
Payment will be processed within the 30 days after the completion of a campaign. Payment will be made in form of GZ
cash which can be redeemed in the form of cash by using the digital wallet like Paytm.{'\n'} {'\n'}
GenZ-360 won’t be responsible for any loss and damage occurs during the transfer or redemption of GZ cash into Digital
wallets. Influencers are requested to contact wallet provider for the same.{'\n'} {'\n'}

Paytm Payment Condition{'\n'} {'\n'}
1. You must have the Re-deemable balance of Rs.20 in your GenZ-360 wallet.{'\n'} 
2. Second transfer can be done after 24 hours.{'\n'}  
3. There should be a gap of 24hrs in two consecutive redemption.{'\n'}  
{'\n'} {'\n'}
<Text style={{fontSize:20,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>SOCIAL MEDIA PROFILE UPDATE/MANAGE</Text>{'\n'} {'\n'}
While updating the social media handles, an influencer is responsible for providing correct id and grants that the account
belongs to him or her.{'\n'} {'\n'}
An Influencer has to connect his/her social media handles with GenZ-360 to complete the registration process. GenZ-360
accesses your social media account with your permission. GenZ-360 accesses the social media because it is permitted by
the owner of the profile.{'\n'} {'\n'}
GenZ-360 won’t be responsible for any kind of damage happens with your social media handles. Influencers are
responsible for the same. GenZ-360 fetches the relevant information only which is required to update the profile and for
tracking the performance of the post. GenZ-360 can’t post anything on any social media profile without the permission of
the owner of that profile.{'\n'} {'\n'}

GenZ-360 has rights to decide or disconnect any social media account if the account seems harmful or creates any kind of
damage to GenZ-360 platform.{'\n'} {'\n'}
An influencer can use one or different social media handles for earning.
To earn, you must fall under any of the criteria below:{'\n'}
1. Facebook Profile with 100 Followers or more
2.More than 100 YouTube Subscribers
3. More than 100 followers on Instagram
4. More than 100 Followers on Twitter{'\n'} {'\n'}
To get a campaign an influencer needs to have a updated profile on GenZ-360. Influencers have to update their profiles
every month to update the number of followers of their respective social media profiles on GenZ-360.
Influencers have to share/Upload their post URL within 12 hours after applying for the campaign, else their application
will be cancelled.{'\n'} {'\n'}

<Text style={{fontSize:20,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>LICENSE TO YOUR CONTENT</Text>{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>BRANDS :-</Text>{'\n'} {'\n'}
We can use your images provided on GenZ-360 or social accounts for promotional/marketing activity of GenZ-360.{'\n'} {'\n'}
<Text style={{fontSize:18,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>INFLUENCERS : -</Text>{'\n'} {'\n'}
We can use your images provided on GenZ-360 or social accounts for promotional/marketing activity of GenZ-360.{'\n'} {'\n'}

<Text style={{fontSize:20,color:'#121b74',fontFamily:'Gilroy-ExtraBold'}}>NON-DISCLOSURE AGREEMENT</Text>{'\n'} {'\n'}
This Non-Disclosure Agreement is made at on Signup with GenZ-360.
By and between{'\n'} {'\n'}
Influencer and Brands, may be individual/firm/limited company incorporated under the Companies Act, with its
registered office
And{'\n'} {'\n'}
STUDENTING ERA PVT. LTD. a company incorporated under the Companies Act, with its place of business FF-4, Hnasraj
Complex, Sector – 31, Noida – 201301.</Text>
              
</View>
                    <View style={{paddingTop:30}}></View>
                </ScrollView>
                
     
     
     </ScrollView>
        );
    }
}


